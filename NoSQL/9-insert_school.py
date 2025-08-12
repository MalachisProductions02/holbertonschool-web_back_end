#!/usr/bin/env python3
"""
9-insert_school
"""

def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in mongo_collection using kwargs as the fields.
    Returns the _id of the inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
