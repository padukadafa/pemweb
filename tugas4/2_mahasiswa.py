mahasiswa = [
    {"nama": "Andi", "nim": "122140001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 78},
    {"nama": "Budi", "nim": "122140002", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 75},
    {"nama": "Citra", "nim": "122140003", "nilai_uts": 60, "nilai_uas": 55, "nilai_tugas": 65},
    {"nama": "Dina", "nim": "122140004", "nilai_uts": 90, "nilai_uas": 92, "nilai_tugas": 88},
    {"nama": "Eka", "nim": "122140005", "nilai_uts": 50, "nilai_uas": 45, "nilai_tugas": 55},
]

for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"
    
    mhs["grade"] = grade

print("\nData Mahasiswa:")
print("{:<10} {:<12} {:<10} {:<10} {:<10} {:<10} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Akhir", "Grade"))
print("-"*70)

for mhs in mahasiswa:
    print("{:<10} {:<12} {:<10} {:<10} {:<10} {:.2f} {:<6}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]))

nilai_akhir_semua = [m["nilai_akhir"] for m in mahasiswa]
max_nilai = max(nilai_akhir_semua)
min_nilai = min(nilai_akhir_semua)

mhs_tertinggi = [m for m in mahasiswa if m["nilai_akhir"] == max_nilai][0]
mhs_terendah = [m for m in mahasiswa if m["nilai_akhir"] == min_nilai][0]

print("\nMahasiswa dengan Nilai Tertinggi:")
print(f"{mhs_tertinggi['nama']} ({mhs_tertinggi['nim']}) - {mhs_tertinggi['nilai_akhir']:.2f}")

print("\nMahasiswa dengan Nilai Terendah:")
print(f"{mhs_terendah['nama']} ({mhs_terendah['nim']}) - {mhs_terendah['nilai_akhir']:.2f}")
