#include <iostream>
#include <windows.h>

#include "Kunde.h"

using namespace std;

int main()
{
	// Charset der Konsole auf ISO-8859-1 umstellen
	SetConsoleOutputCP(28591);

	Kunde* kunde = new Kunde;
	kunde->setVars(10110101, "Sebastian", "Teister", "72555", "Metzingen", "Rindenstraße", "11");
	kunde->getVars();
	delete kunde;
	return 0;
}
