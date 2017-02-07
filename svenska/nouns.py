# -*- coding: utf-8 -*-
import json

f = open('nouns.json', 'r')
raw_data = f.read().decode('utf8')
print(raw_data)
json.loads(raw_data)
#data = json.loads(f.read())

f.close()

#print(data)