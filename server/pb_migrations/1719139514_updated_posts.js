/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t428f5a3ogngylt")

  collection.listRule = "@request.auth.collectionName = \"users\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t428f5a3ogngylt")

  collection.listRule = "@request.auth.collectionName = \"Users\""

  return dao.saveCollection(collection)
})
