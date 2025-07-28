#!/usr/bin/env python3
"""Measure the runtime of running async_comprehension 4 times in parallel."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """
    Run async_comprehension four times in parallel using asyncio.gather,
    measure the total runtime and return it.
    """
    start = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = time.perf_counter()
    return end - start
