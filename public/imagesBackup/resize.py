import os
import cv2 as cv

files = os.listdir()
for file in files:
    if '.jpg' in file:
        img = cv.imread(file)
        ratio = img.shape[1] / img.shape[0]
        newWidth = 1920
        newHeight = int(newWidth * ratio)
        newImg = cv.resize(img, (newWidth, newHeight))
        print(img.shape, ratio, newImg.shape)
        cv.imwrite(file)
