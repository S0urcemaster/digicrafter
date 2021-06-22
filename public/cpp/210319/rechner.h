#pragma once

#include <iostream>
#include <cstring>

#include "lib.h"

using namespace std;

/**
* Nimmt einen einteiligen Term an und berechnet ihn.
* Algorithmus:
* - Suche Operator
* - Kopiere linke Seite und wandle in int um
* - Kopiere rechte Seite und wandle in int um
* - berechne je nach Operator
*/
int rechner();