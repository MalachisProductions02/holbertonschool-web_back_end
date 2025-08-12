#!/usr/bin/env python3
"""
8-all
"""

def list_all(mongo_collection):
    """
    Returns a list of all documents in a pymongo collection.
    Returns an empty list if no documents are found.
    """
    return list(mongo_collection.find())
