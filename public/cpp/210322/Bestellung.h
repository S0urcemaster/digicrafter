#pragma once

#include <iostream>

using namespace std;

class Bestellung
{
	int bnr;
	int knr;
	int anr;
	int anzahl;

public:
	void setVars(int bnr, int knr, int anr, int anzahl);
	void getVars();
};
};

