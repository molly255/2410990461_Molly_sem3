#include <iostream>
#define PI 3.14159  // Macro constant (no type, no scope)

using namespace std;

int main() {
    const int daysInWeek = 7; // Type-safe constant

    cout << "Using const variable: days in a week = " << daysInWeek << endl;
    cout << "Using #define macro: PI = " << PI << endl;

    // Differences
    cout << "\nDifference:\n";
    cout << "- 'const' is type-safe and follows scope rules.\n";
    cout << "- '#define' is handled by preprocessor, has no type or scope.\n";

    return 0;
}
