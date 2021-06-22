#pragma once

#include <iostream>

using namespace std;

class Kunde
{
	int knr;
	string vorname;
	string nachname;
	string plz;
	string ort;
	string strasse;
	string hausnummer;

public:
	Kunde();
	~Kunde();
	void setVars(int knr, string vorname, string nachname, string plz, string ort, string strasse, string hausnummer);
	void getVars();

};

