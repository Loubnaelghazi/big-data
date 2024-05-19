from fastapi import APIRouter, HTTPException
from bson import ObjectId  # Import ObjectId from bson module
from db import collection
from pymongo.errors import PyMongoError

router = APIRouter()

@router.get("/api/v1/test")
async def server_test():
    return {"server status": "running"}

@router.get("/api/v1/get-data")
async def data_fetch():
    try:
        cursor = collection.find()
        data = await cursor.to_list(length=None)
        for item in data:
            item["_id"] = str(item["_id"])
        return data
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=str(e))

