#include "Kunde.h"

Kunde::Kunde()
{
}

Kunde::~Kunde()
{
}

void Kunde::setVars(int knr, string vorname, string nachname, string plz, string ort, string strasse, string hausnummer)
{
	this->knr = knr;
	this->vorname = vorname;
	this->nachname = nachname;
	this->plz = plz;
	this->ort = ort;
	this->strasse = strasse;
	this->hausnummer = hausnummer;
}

void Kunde::getVars()
{
	cout << "Kundennummer: " << knr << endl;
	cout << "Vorname:      " << vorname << endl;
	cout << "Nachname:     " << nachname << endl;
	cout << "Straße:       " << strasse << endl;
	cout << "Hausnummer:   " << hausnummer << endl;
	cout << "Plz:          " << plz << endl;
	cout << "Ort:          " << ort << endl;
}
