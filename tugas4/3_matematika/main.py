import math_operations as mo


print("=== Perhitungan Geometri ===")
sisi = 5
print(f"Luas persegi (sisi={sisi}): {mo.luas_persegi(sisi)}")
print(f"Keliling persegi (sisi={sisi}): {mo.keliling_persegi(sisi)}")

panjang, lebar = 10, 4
print(f"Luas persegi panjang (panjang={panjang}, lebar={lebar}): {mo.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang (panjang={panjang}, lebar={lebar}): {mo.keliling_persegi_panjang(panjang, lebar)}")

radius = 7
print(f"Luas lingkaran (radius={radius}): {mo.luas_lingkaran(radius):.2f}")
print(f"Keliling lingkaran (radius={radius}): {mo.keliling_lingkaran(radius):.2f}")

print("\n=== Konversi Suhu ===")
celsius = 25
print(f"{celsius}°C ke Fahrenheit: {mo.celsius_ke_fahrenheit(celsius):.2f}°F")
print(f"{celsius}°C ke Kelvin: {mo.celsius_ke_kelvin(celsius):.2f}K")
