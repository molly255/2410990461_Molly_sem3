#include <iostream>
using namespace std;

int main() {
    // Different initialization styles
    int a = 10;     // Copy Initialization
    int b(20);      // Direct Initialization
    int c{30};      // Uniform Initialization (C++11)
    int d{};        // Default Initialization (sets d = 0)

    cout << "Copy Initialized: a = " << a << endl;
    cout << "Direct Initialized: b = " << b << endl;
    cout << "Uniform Initialized: c = " << c << endl;
    cout << "Default Initialized: d = " << d << endl;

    return 0;
}
