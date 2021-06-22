#include "lib.h"

bool isDigit(char& c) {
	return c > 47 && c < 58;
}

int charToDigit(char& c) {
	if (isDigit(c)) {
		return c - '0';
	}
	else {
		return -1;
	}
}

int charsToInt(char* chars) {

	int res{ 0 };

	// <cstring>: strlen(zeichenkette)
	int len = strlen(chars);

	// Vorzeichen berücksichtigen
	bool sig = *chars == '-';
	// wenn vorhanden, ein Zeichen nach rechts gehen
	if (sig) {
		chars++;
		len--;
	}

	// Einzelne character durchgehen
	// und mit passender 10er Potenz multiplizieren (<cmath>: pow(basis, exponent))
	for (int i{ 0 }; i < len; i++) {
		int zif = charToDigit(*(chars + i));
		res += zif * (pow(10, len - i - 1));
		// z.B. 2  * (    10 ^ (3 - 0 - 1)) = 2 * 10^2 = 200
		//      3  * (    10 ^ (3 - 1 - 1)) = 3 * 10^1 = 30
		//      4  * (    10 ^ (3 - 2 - 1)) = 4 * 10^0 = 4, die Zahl ist also 234
	}

	// Vorzeichen dran mit ternärem Operator:
	// bedingung ? wenn erfüllt : wenn nicht erfüllt
	res *= sig ? -1 : 1;

	return res;
}

char* charsFrom(const char* pSource, const char* pPos) {
	int len = strlen(pSource) - (pPos - pSource + 1);
	char* res = new char[len + 1];
	// <cstring>: strncpy(ziel, quelle, anzahl)
	strncpy(res, pPos + 1, len);
	res[len] = '\0';
	return res;
}

char* charsUntil(const char* pSource, const char* pPos) {
	int len = pPos - pSource;
	char* res = new char[len + 1];
	strncpy(res, pSource, len);
	res[len] = '\0';
	return res;
}