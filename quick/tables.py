from pymongo import MongoClient
import json
client = MongoClient('mongodb://localhost:27017')

tableCollection = client.yepl.tables

result = tableCollection.find_one({})

rows = {"tables": []}

for r in result:
	rows['tables'].append(r)

f = open('one_table.json', 'w')
f.write(json.dumps(rows))
f.close()