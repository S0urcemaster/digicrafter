#include "Bestellung.h"

void Bestellung::setVars(int bnr, int knr, int anr, int anzahl)
{
	this->bnr = bnr;
	this->knr = knr;
	this->anr = anr;
	this->anzahl = anzahl;
}

void Bestellung::getVars()
{
	cout << "Bestellnummer: " << bnr << endl;
	cout << "Kundennummer : " << knr << endl;
	cout << "Artikelnummer: " << anr << endl;
	cout << "Anzahl       : " << anzahl << endl;
}
