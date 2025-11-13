# Exercise 01: SVG | 13.11.2025

## Introduction

SVG stands for Scalable Vector Graphics. It's a syntax, based on XML, used to specify 2D-vector graphics which can be interpreted by the browser. The difference to pixel-based raster graphics, such as PNG, JPEG, etc. which rely on a coordination system with integers, SVG coordinates allow for floating-point numbers. The file itself doesn't store the pixel information itself, but rather a description, which then gets interpreted by the browser (or other software, capable of doing so) and output as the desired graphic - completely responsive and scalable without loosing information / quality.

## ViewBox

A ViewBox is an (optional) attribute, which creates a "container", in which the graphic itself gets displayed. It specifies the coordinate system and aspect ratio in which the SVG’s content is drawn. By using a viewBox, you can make an SVG scale reliably: no matter how large or small the SVG is displayed, it will always fit its container while preserving its proportions.

[ViewBox Image]("viewbox-values.png")
