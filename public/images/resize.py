import os
import cv2 as cv

files = os.listdir()
for file in files:
    if '.jpg' in file:
        img = cv.imread(file)
        ratio = img.shape[0] / img.shape[1]
        newWidth = 1280
        newHeight = int(newWidth * ratio)
        newImg = cv.resize(img, (newWidth, newHeight),
                           interpolation=cv.INTER_CUBIC)
        # print(img.shape, ratio, newImg.shape)
        cv.imwrite(file, newImg)
