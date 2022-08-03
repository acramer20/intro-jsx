function App() {
    return (
      <div>
        <Person
          name="Nathaniel"
          age={23}
          hobbies={["netflix", "chill", "coding"]}
        />
        <Person name="Elle" age={16} hobbies={["saving world", "shopping"]} />
        <Person
          name="Will"
          age={18}
          hobbies={["dying/sortof", "loving his bestfriend"]}
        />
        <Person
          name="Cooper"
          age={8}
          hobbies={["napping", "hiking", "being a cute dog"]}
        />
      </div>
    );
  }