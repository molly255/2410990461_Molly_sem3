#include <iostream>
#include <climits> // For INT_MIN, INT_MAX, UINT_MAX
using namespace std;

int main() {
    cout << "Sizes of Fundamental Data Types:\n";
    cout << "int: " << sizeof(int) << " bytes\n";
    cout << "float: " << sizeof(float) << " bytes\n";
    cout << "double: " << sizeof(double) << " bytes\n";
    cout << "char: " << sizeof(char) << " bytes\n";
    cout << "bool: " << sizeof(bool) << " bytes\n";
    cout << "long: " << sizeof(long) << " bytes\n";
    cout << "short: " << sizeof(short) << " bytes\n";

    cout << "\nSigned and Unsigned Ranges:\n";
    cout << "Signed int min: " << INT_MIN << ", max: " << INT_MAX << endl;
    cout << "Unsigned int max: " << UINT_MAX << endl;

    cout << "\nType Casting:\n";
    int a = 10;
    float b = 3.14;
    cout << "int a = 10; float b = 3.14;\n";
    cout << "a + b = " << a + b << " (Implicit casting)\n";

    double c = static_cast<double>(a); // Explicit casting
    cout << "a (cast to double): " << c << endl;

    return 0;
}
