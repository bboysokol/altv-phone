/**
 * QueryBasedRouter
 *
 * Router oparty na parametrach query (location.search), wspierający się react-router
 *
 * Pozwala na renderowanie wielu komponentów w tym samym czasie
 * Bazuje on na query, np. profile=details
 *
 * Dwa rodzaje ścieżek
 * 1. Root ==> ścieżki pozwalające na renderowanie komponentu nadrzędnego
 *  wraz z podrzędnymi ścieżkami w definicji używamy tylko klucza parametru
 * 2. Podrzędna ==> ścieżki które renderowane są w komponencie typu Root, należy
 *  podać ścieżkę w formacie "root~~nested"
 *
 * Typ ścieżki jest automatycznie wybierany poprzez rozdzielenie argumentu, jeśli
 * istnieje tylko root to ścieżka wyrenderuje się zawsze gdy istnieje dany parametr
 * z dowolną wartością. W przypadku podrzędnej sprawdzana jest również wartość
 *
 * Wspiera przekazywanie parametrów do ścieżek poprzez przekierowywanie przy
 * użyciu komponentu <QueryLink /> oraz programowo przez navigate(), parametry
 * podajemy poprzez obiekt { }
 */
