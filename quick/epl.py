f = open('out_3.json', 'r')
data = f.read()
f.close()

from pymongo import MongoClient
import json
client = MongoClient('mongodb://localhost:27017')
gameCollection = client.yepl.games
tableCollection = client.yepl.tables

seasonList = gameCollection.distinct('season')
for season in seasonList:
	gameList = gameCollection.find({'season': {'$eq': season}})
	table_dict = {}
	for game in gameList:
		home = game['home_team']
		away = game['away_team']
		home_score = game['home_score']
		away_score = game['away_score']
		if home not in table_dict.keys():
			table_dict[home] = { 'points': 0, 'goals_for': 0, 'goals_against': 0, 'won': 0, 'lost': 0, 'drawn': 0}
		if away not in table_dict.keys():
			table_dict[away] = { 'points': 0, 'goals_for': 0, 'goals_against': 0, 'won': 0, 'lost': 0, 'drawn': 0 }
		if home_score > away_score:
			table_dict[home]['points'] += 3
			table_dict[home]['won'] += 1
			table_dict[away]['lost'] += 1
		if home_score < away_score:
			table_dict[away]['points'] += 3
			table_dict[home]['lost'] += 1
			table_dict[away]['won'] += 1
		if home_score == away_score:
			table_dict[home]['points'] += 1
			table_dict[away]['points'] += 1
			table_dict[home]['drawn'] += 1
			table_dict[away]['drawn'] += 1
		table_dict[home]['goals_for'] += home_score
		table_dict[away]['goals_for'] += away_score
		
		table_dict[home]['goals_against'] += away_score
		table_dict[away]['goals_against'] += home_score
			
	table_list = []
	for item in table_dict.keys():
		table_list.append({
			'team': item,
			'points': table_dict[item]['points'],
			'goals_for': table_dict[item]['goals_for'],
			'goals_against': table_dict[item]['goals_against'],
			'goals_diff': table_dict[item]['goals_for'] - table_dict[item]['goals_against'],
			'won' : table_dict[item]['won'],
			'drawn' : table_dict[item]['drawn'],
			'lost' : table_dict[item]['lost'],
			})

	#for row in sorted(table_list, key = lambda i: (i['points'], i['goals_diff'], i['goals_for']), reverse=True):
	#	print(row)
	tableCollection.insert_one({'_id': season, 'table': sorted(table_list, key = lambda i: (i['points'], i['goals_diff'], i['goals_for']), reverse=True)})