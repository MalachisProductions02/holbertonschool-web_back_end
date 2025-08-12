#!/usr/bin/env python3
"""
10-update_topics
"""

def update_topics(mongo_collection, name, topics):
    """
    Updates all documents with the given school name by setting their 'topics' field
    to the provided list of topics.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
