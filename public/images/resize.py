import os
import cv2 as cv

files = os.listdir()
for file in files:
    if '.jpg' in file:
        img = cv.imread(file)
        ratio = img.shape[1] / img.shape[0]
        print(img.shape, ratio)
        newWidth = 1920
        newHeight = newWidth * ratio
        newImg = cv.resize(img, [newWidth, newHeight])
