#pragma once

#include <iostream>

using namespace std;

class Artikel
{
	int anr;
	string name;
	string beschreibung;
	double preis;

public:
	void setVars(int anr, string name, string beschreibung);
	void getVars();
};

