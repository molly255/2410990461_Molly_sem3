#include <iostream>
using namespace std;

int main() {
    // 1. Declare arrays
    int intArray[5];                        // Integer array
    float floatArray[] = {1.1, 2.2, 3.3};   // Initialized float array
    char charArray[4] = {'A', 'B', 'C', 'D'}; // Character array

    // 2. Take user input for intArray
    cout << "Enter 5 integers:\n";
    for (int i = 0; i < 5; i++) {
        cin >> intArray[i];
    }

    // 3. Modify and display updated array
    cout << "\nModified Integer Array (each value +1):\n";
    for (int i = 0; i < 5; i++) {
        intArray[i] += 1;
        cout << intArray[i] << " ";
    }

    // 4. Calculate sum and average
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += intArray[i];
    }
    float average = sum / 5.0;

    cout << "\n\nSum = " << sum << endl;
    cout << "Average = " << average << endl;

    return 0;
}
