#!/usr/bin/env python3
"""
This module contains the to_kv function that returns a tuple with
a string and the square of a number as a float.
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is k (str) and
    the second element is the square of v (float)."""
    return (k, float(v ** 2))
