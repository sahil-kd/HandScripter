# Deep Learning Fundamentals

Welcome to the Deep Learning Fundamentals README. In this document, we provide concise definitions and explanations for some key components in the field of deep learning.

## Activation Functions

Activation functions introduce non-linearity to neural networks. They determine the output of a neuron or a node given a set of weighted inputs. Common activation functions include:

- **ReLU (Rectified Linear Activation):**
  `f(x) = max(0, x)`

  - Widely used due to its simplicity and effectiveness.

- **Sigmoid:**
  `f(x) = 1 / (1 + exp(-x))`

  - Used in binary classification problems.

- **Tanh (Hyperbolic Tangent):**
  `f(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))`

  - Similar to sigmoid but with values in the range (-1, 1).

- **Softmax Activation Function:**

  The softmax activation function is a widely used activation function in deep learning, particularly in multi-class classification problems. It is used to convert a vector of raw scores (logits) into a probability distribution over multiple classes. The softmax function computes the probability that a given input belongs to each class.

  In mathematical terms, given a vector of logits \(z = [z_1, z_2, \ldots, z_n]\), the softmax function computes the probability \(p_i\) for each class \(i\) as follows:

  \[p*i = \frac{e^{z_i}}{\sum*{j=1}^{n} e^{z_j}}\]

  - \(e^{z_i}\) represents the exponential of the \(i\)-th element of the input vector.
  - The denominator \(\sum\_{j=1}^{n} e^{z_j}\) sums up the exponentials of all elements in the input vector, ensuring that the probabilities sum to 1.

  The softmax function effectively squashes the raw scores into a probability distribution, making it suitable for multi-class classification tasks, where the goal is to assign one of several possible labels to the input.

  Commonly, the class with the highest probability after applying softmax is selected as the predicted class.

  The softmax activation function is essential in the output layer of neural networks for multi-class classification problems, and it plays a crucial role in training and making predictions in such tasks.

  It makes sure all the output layer neurons add up to 1. You can interpret this as "confidence". Each of those neurons will have a level of confidence between 0 and 1. And it signals how likely is this neuron to be the actual output. It gives the probability for each output neuron to be the right answer essentially squashing a set of outcomes to a single outcome.

## Optimizers

Optimizers are algorithms used to adjust the parameters (weights and biases) of a neural network during training to minimize the loss function. They control how the model learns. Common optimizers include:

- **SGD (Stochastic Gradient Descent):**

  - Updates parameters based on the gradient of the loss with respect to the parameters.

- **Adam (Adaptive Moment Estimation):**

  - Combines the advantages of both RMSprop and momentum methods. It adapts the learning rate during training.

- **Adagrad:**
  - Adapts the learning rate for each parameter individually based on historical gradients.

## Loss Functions

Loss functions measure the difference between the predicted values and the actual target values during training. The goal is to minimize this loss to train the model effectively. Different tasks (e.g., classification, regression) may require different loss functions. Examples include:

- **Mean Squared Error (MSE):**

  - Commonly used for regression problems.

- **Cross-Entropy (Log Loss):**

  - Used for classification problems, especially in logistic regression and neural networks.

- **Hinge Loss:**

  - Used in support vector machines (SVMs) and linear classifiers.

- **Sparse Categorical Cross-Entropy**

  The sparse categorical cross-entropy loss function is a commonly used loss function in deep learning, particularly in multi-class classification problems where the target labels are integers representing class indices. It is suitable when the target labels are not one-hot encoded but rather represented as a single integer for each sample.

  In multi-class classification, the goal is to assign one of several possible class labels to each input sample. The sparse categorical cross-entropy loss quantifies the dissimilarity between the predicted probability distribution and the true class labels.

  Mathematically, given the true class labels \(y\) as integers and the predicted probability distribution \(p\), the sparse categorical cross-entropy loss is calculated as follows:

  \[L(y, p) = -\sum*{i=1}^{N} \log(p*{i, y_i})\]

  - \(N\) is the number of classes.
  - \(y_i\) is the true class label for sample \(i\).
  - \(p\_{i, y_i}\) is the predicted probability assigned to the true class label for sample \(i\).

  The loss function encourages the predicted probabilities for the true class labels to be as close to 1 as possible, while pushing the probabilities for other classes towards 0. The negative log likelihood of the true class labels is used as the loss, and it is minimized during training.

  The sparse categorical cross-entropy loss is commonly used with the softmax activation function in the output layer of neural networks for multi-class classification tasks. It serves as the objective function that the model aims to minimize during training to improve classification accuracy.

## Layer Types

Neural networks are composed of different types of layers that perform specific operations. Common layer types include:

- **Dense (Fully Connected) Layer:**

  - Each neuron in this layer is connected to every neuron in the previous and subsequent layers.

- **Convolutional Layer:**

  - Used in Convolutional Neural Networks (CNNs) for feature extraction from images. These layers apply convolution operations to the input data.

- **Pooling Layer:**

  - Also used in CNNs, pooling layers reduce the spatial dimensions of the data, helping reduce computational complexity.

- **Recurrent Layer (e.g., LSTM, GRU):**
  - Used for sequential data processing. Recurrent layers maintain internal states to process sequences effectively.

These fundamental components are essential for designing, training, and understanding the behavior of neural networks in various machine learning tasks. The choice of activation functions, optimizers, loss functions, and layer types depends on the specific problem you are trying to solve and the characteristics of your data.

Feel free to explore and refer back to this document!
