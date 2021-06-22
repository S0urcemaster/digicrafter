#include "rechner.h"

int rechner() {
	
	char* pInput = new char[16];

	cout << "Integer Berechnung eingeben (ohne Leerzeichen, 'ende' oder 'e' zum Beenden): " << endl;
	cin >> pInput;

	if (*pInput == 'e') {
		return 0;
	}

	// nach Operator suchen (<cstring>: strpbrk(heuhaufen, nadel))
	const char* pOperator = strpbrk(pInput + 1, "+-*/");

	if (pOperator != NULL) {

		// linke Seite holen
		char* pLeft = charsUntil(pInput, pOperator);
		int z1 = charsToInt(pLeft);

		// rechte Seite holen
		char* pRight = charsFrom(pInput, pOperator);
		int z2 = charsToInt(pRight);

		// rechnen
		int res{ 0 };
		switch (*pOperator) {
		case '+':
			res = z1 + z2;
			break;
		case '-':
			res = z1 - z2;
			break;
		case '*':
			res = z1 * z2;
			break;
		case '/':
			res = z1 / z2;
			break;
		}
		cout << "Ergebnis: " << res << endl << endl;
		return 1;
	}
	cout << "Operator nicht gefunden" << endl << endl;
	return 2;
}