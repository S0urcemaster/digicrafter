/**
* Aufgabe vom 18.03.21
* Summe berechnen in Schleife mit Abbruchbedingung
* 
* Zusätzliche Herausforderung: Die Abbruchbedingung soll dieselbe Eingabe sein wie die erste Zahl.
* Man kann also eine Zahl eingeben ODER 'ende'/'e'.
* Problem: Man kann Zeichen nicht in eine int-Variable stecken, also muss man die Eingabe in einen char aufnehmen.
* Und da mehrere Ziffern als Zahl möglich sein sollen, muss man ein char Array nehmen (char[]).
* Weiteres Problem: Man kann ein char Array (mit den bisher bekannten Bibliotheken) nicht direkt in einen int umwandeln.
* Man muss also die einzelnen character in Ziffern umwandeln und mittels Potenzieren wieder zusammensetzen.
* 
*/

#include <iostream>

using namespace std;

int rechne(int& n1, int& n2) {
	return n1 + n2;
}

// Potenz berechnen
int pow(int& base, int& exp) {
	int res{ 1 };
	for (int i{ 0 }; i < exp; i++) {
		res *= base;
	}
	return res;
}

int main()
{
	while (true) {
		char ch1[9];
		int num1{ 0 };
		int num2;

		cout << "Zahl 1 eingeben (ende zum Beenden): ";
		cin >> ch1;

		if (ch1[0] == 'e') {
			break;
		}
		else {
			// Länge der Eingabe berechnen
			int len = 0;
			for (int i{ 0 };; i++) {
				if (ch1[i] != '\0') {
					len++;
				}
				else {
					break;
				}
			}
			// Einzelne Ziffern mit jeweiligen 10er Potenz addieren
			int count = len;
			for (int i{ 0 }; i <count; i++) {
				int x = (ch1[i] - '0');
				int exp = pow (10, --len);
				x *= exp;
				num1 +=  x;
			}
		}

		cout << "Zahl 2 eingeben: ";
		cin >> num2;

		cout << "Summe: " << rechne(num1, num2) << endl;
		cout << endl;
	}

	return 0;
}
