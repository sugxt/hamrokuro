/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ol5s2ioq1ijz75")

  // remove
  collection.schema.removeField("q2alcbxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vuxpihnt",
    "name": "LTP",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ol5s2ioq1ijz75")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2alcbxr",
    "name": "LTP",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("vuxpihnt")

  return dao.saveCollection(collection)
})
