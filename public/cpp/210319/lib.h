#pragma once
// strncpy is deprecated. Don't try at home!
#define _CRT_SECURE_NO_WARNINGS

#include <cstring>
#include <cmath>

using namespace std;

/**
* Prüft, ob character 0-9 ist.
*/
bool isDigit(char& c);

/**
* Wandelt character in Ziffer um oder gibt -1 zurück wenn c keine Ziffer ist.
*/
int charToDigit(char& c);

/**
* Wandelt ein Character Array in Zahl um.
* (Please upvote my post: https://stackoverflow.com/a/66730475/3153939. Thanks!)
*/
int charsToInt(char* chars);

/**
* Gibt die rechte Seite eines char Arrays pSource ab Position pPos (exclusive) als neues char Array zurück.
*/
char* charsFrom(const char* pSource, const char* pPos);

/**
* Gibt die linke Seite eines char Arrays pSource bis Position pPos (exclusive) als neues char Array zurück.
*/
char* charsUntil(const char* pSource, const char* pPos);
