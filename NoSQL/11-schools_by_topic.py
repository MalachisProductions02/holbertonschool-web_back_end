#!/usr/bin/env python3
"""
11-schools_by_topic
"""

def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of documents where 'topics' field contains the specified topic.
    """
    return list(mongo_collection.find({"topics": topic}))
