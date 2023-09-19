# use this file for testing/visualizing chunks of code

import tensorflow as tf
import cv2 as cv
import numpy as np

mnist = tf.keras.datasets.mnist
# Note that the loaded data has not been normalized yet
(x_train, y_train), (x_test, y_test) = mnist.load_data()  # fmt:skip

# In case of RGB value we can store them in hexadecimal values to maintain dependence on a single digit instead of tuple

# has 10,000 matrices (a list/array of matrices = a list/array of images), an array of 10,000 elements
print(len(x_test))

# has 60,000 matrices, an array of 60,000 elements
print(len(x_train))

# an array of 10,000 elements (has labelled numbers that corresponds to each image/matrix)
print(len(y_test))

# an array of 60,000 elements (same as above)
print(len(y_train))

print(x_train[0])
matr = x_train[0]

# Now let's visualize the image using OpenCV
# First convert the 2D array to a NumPy array with dtype=np.uint8
# uint8 is basically the image datatype (unsigned 8-bits integer)
matr = np.array(matr, dtype=np.uint8)

# Create an empty black image with the same dimensions
image = np.zeros((matr.shape[0], matr.shape[1], 3), dtype=np.uint8)

# Assign pixel intensity values to the red channel (assuming grayscale input)
image[:, :, 2] = matr

# Display the image using cv2.imshow()
cv.imshow("Pixel Intensity Image", image)

# Wait for a key press and then close the window
cv.waitKey(0)
cv.destroyAllWindows()
