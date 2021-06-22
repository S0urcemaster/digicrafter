#include "Artikel.h"

void Artikel::setVars(int anr, string name, string beschreibung)
{
	this->anr = anr;
	this->name = name;
	this->beschreibung = beschreibung;
}

void Artikel::getVars()
{
	cout << "Artikelnummer: " << anr << endl;
	cout << "Name         : " << name << endl;
	cout << "Beschreibung : " << beschreibung << endl;
}
