const mobileA = `
flowchart TB
  A([START]) === T["Map (w/ existing marker state if any)* (🧩 4A)"]
  T ==> B("🔎 Enter search* (🧩 4B)")
  B ===|"🔄 Retrieves results while typing<br/>or just the default list if nothing typed<br/>🗺🔄 Clears existing map marker state if value is changed"| J["Search results list or default list (🧩 4C)"]
  J -.-> P("⬅️ Go back")
  P -.-> T

  J ==> C{Select category<br/>or POI list item}
  C ==>|"Select category list item"| L["Category list* (🧩 4F)"]
  L -.-> B

  L ==> U(Select: view all in map)
  U ==> V["🗺🔄 Map w/ all category POI markers highlighted or clustered*"]
  V ==> W(Select POI marker)
  W ==>|Maps zooms and centers on POI| E["🗺🔄 Map w/ POI marker highlighted & selected*"]
  V -.-> B
  V ==> F("⬅️ Go back")
  V --> K([END])

  L ==> D(Select POI list item)
  L -.-> O("⬅️ Go back")
  O -.-> J
  D ==>|Maps zooms and centers on POI| E
  E --> K
  E ==> F
  F ==> L

  C -->|"Select POI list item<br/>(maps zooms and centers on POI)"| H["🗺🔄 Map w/ POI marker highlighted & selected*"]
  H --> K
  H -.-> O

  %% Clear search
  E & H & J & L  -.-> Q("❌ Clear search")
  Q -.->|"🗺🔄 Clears search term<br/>& map marker state"| B

  %% Styling
  classDef action fill:#eeffec, stroke:#70db91
  classDef terminal fill:#fff, stroke:#c5c5c5
  class B,C,D,F,O,P,Q,U,W action
  class A,K terminal
`;

const desktopA = `
flowchart TB
  A([START]) === Q["Search results list & map<br/>(w/ existing search & map marker<br/>state if any)"]
  Q ==> B("🔎 Enter search")
  B ===|"🔄 Retrieves results while typing<br/>or just the default list if nothing typed<br/>🗺🔄 Clears existing map marker state<br/>if value is changed"| C["Search results list & map<br/>(w/ existing search & map marker<br/>state if any)"]
  C -.-> J("⬅️ Go back")
  J -.-> Q
  C ==> D{Select category<br/>or POI list item}
  D -->|"Select POI list item<br/>(maps zooms and centers on POI)"| O["POI detail and actions & 🗺🔄 map<br/>(w/ selected POI marker)"]
  O -.-> H("⬅️ Go back")
  O --> R([END])
  D ==>|"Select category list item"| E["Category list* & 🗺🔄 map<br/>(w/ all category POI markers<br/>highlighted or clustered)"]
  E -.-> H
  E -.-> B
  E --> R
  H -.-> C
  E ==> T(Focus on POI list item)
  T ==> U["Category list & 🗺🔄 map<br/>(w/ all category POI markers highlighted<br/>and one POI marker focused)"]
  U ==> L("⬅️ Go back")
  U --> R
  E ==> F(Select POI list item)
  F ==>|Maps zooms and centers on POI| S["POI detail and actions & 🗺🔄 map<br/>(w/ all category POI markers highlighted<br/>and one POI marker selected)"]
  S ==> L
  S --> R
  E ==> K("Select POI on map")
  K ==> G["POI detail and actions & 🗺🔄 map<br/>(w/ selected POI marker)"]
  G ==> L
  G --> R
  L ==> E

  %% Clear search
  C & E & S -.-> P("❌ Clear search")
  P -.->|"🗺🔄 Clears search term<br/>& map marker state"| B

  %% Styling
  classDef action fill:#eeffec, stroke:#70db91
  classDef terminal fill:#fff, stroke:#c5c5c5
  class B,D,F,H,J,K,L,P,T action
  class A,R terminal
`;

export { mobileA, desktopA }
