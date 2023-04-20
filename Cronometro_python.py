from time import sleep
h = 0
m = 0
s = 0 

print("="*30)
print("        Cronometro")
print("="*30)

start = str(input("Aperte ´i´ para Iniciar o Cronometro: "))

while start == "i":
  if s < 60: 
    s += 1
    #sleep(0.3)

  elif m < 60:
    m += 1
    s = 0
    #sleep(0.2)

  elif h < 24:
    h += 1
    m = 0
    sleep(0.1)

  elif h == 24:
    s = 0
    m = 0
    h = 0
    
  print(f"{h}:{m}:{s}")

