#!/usr/bin/env python3
"""
This module contains the function make_multiplier which returns 
a function that multiplies a float by a given multiplier.
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its float input by the provided multiplier.
    """
    return lambda x: x * multiplier

