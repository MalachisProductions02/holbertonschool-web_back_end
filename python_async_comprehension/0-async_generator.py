#!/usr/bin/env python3
"""Async generator coroutine yielding 10 random numbers with 1s delay."""

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that asynchronously yields 10 random floats between 0 and 10,
    waiting 1 second between each yield.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
