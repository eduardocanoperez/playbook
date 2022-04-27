const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//    Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("ejercicio 1")
explorers.forEach(explorer => console.log(explorer.name))

//    Imprime el stack de cada explorer, usa FOR EACH
console.log("ejercicio 2")
explorers.forEach(explorer => console.log(explorer.stack))

//    Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("ejercicio 3")
const explorers_stack = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorers_stack)

//    Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("ejercicio 4")
const explorers_whit_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorers_whit_js)

//    Busca el primer explorer que sea de la CDMX, usa FIND
console.log("ejercicio 5")
const first_ecplorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
console.log(first_ecplorer_in_cdmx)

//    Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("ejercicio 6")
const all_excercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_excercises)

//    Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("ejercicio 7")
const explorer_validation = explorers.some(my_explorer_in_list => my_explorer_in_list.exercisesFinished === "true")
console.log(explorer_validation)

//    Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.


