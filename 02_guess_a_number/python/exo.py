# Étape 1
# Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
# (Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé 
# si besoin).
# Stocker sa réponse dans une variable de type adéquat nommée givenNumber.
number_to_guess = 22

def choose_a_number():
    min_number = 0
    max_number = 50
    
    player_response = input(f"Essaye de deviner le nombre. Choisis un nombre compris entre {min_number} et {max_number}")
    while int(player_response) < int(min_number) or int(player_response) > int(max_number):   
        player_response = input(f'Choix invalide ! Il faut choisir un nombre compris entre {min_number} et {max_number}')
    return int(player_response)

def did_I_win(player_response, number_to_guess):
    if int(player_response) < int(number_to_guess):
        print('plus grand')
        return False
    elif int(player_response) > int(number_to_guess):
        print('plus petit')
        return False
    elif int(player_response) == int(number_to_guess):
        print('Bravo ! Vous avez deviné le nombre')
        return True
        
def player1_input():
    min_number = 0
    max_number = 50
    
    input_player1 = input(f'Choisis un nombre compris entre {min_number} et {max_number} à faire deviner à l\'autre joueur')
    
    while int(input_player1) < int(min_number) or int(input_player1) > int(max_number):
        input_player1 = input(f'Choix invalide ! Il faut choisir un nombre compris entre {min_number} et {max_number} à faire deviner à l\'autre joeur')
    return int(input_player1)
    
    
def gameplay():
    mistery_number = player1_input()
    user_guess = 0
    while int(user_guess) != int(mistery_number):
        user_guess = choose_a_number()
        if did_I_win(user_guess, mistery_number):
            break
    print("merci d'avoir joué")
    
gameplay()

def gameplay_number_per_default(mistery_number):
    user_guess = 0
    while user_guess != mistery_number:
        user_guess = choose_a_number()
        if did_I_win(user_guess, mistery_number):
            break
    print("merci d'avoir joué")
              
# gameplay_number_per_default(number_to_guess)