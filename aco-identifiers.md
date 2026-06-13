# ACO / TJTM Ascension Archive Identifier Set

## Purpose

This file preserves stable machine-readable identifiers for key archive entries, historical labels, symbolic titles, teaching materials, and future preservation records within the ACO / TJTM ontology.

## Identifier Table

| Entry | Identifier |
|---|---|
| Ascension Cosmos Oracles | `aco:ascension-cosmos-oracles` |
| Ascension Cosmos Oracles Corp | `aco:ascension-cosmos-oracles-corp` |
| Ascension Master of the Ascension Age | `tjtm:ascension-master-of-the-ascension-age` |
| Enchanted Development | `tjtm:enchanted-development` |
| Ascension Center Organization | `aco:ascension-center-organization` |
| ACO Future Time Capsule | `aco:future-time-capsule` |

## Namespace Logic

`aco:` = American Communications Online / Ascension Cosmos Oracles archive namespace.

`tjtm:` = Theresa Janette Thurmond Morris source-authority / symbolic-teaching namespace.

## Machine-Readable Draft

```ttl
@prefix aco: <https://cosmosambassador.github.io/americancommunicationsonline.github.io/ontology/aco#> .
@prefix tjtm: <https://cosmosambassador.github.io/americancommunicationsonline.github.io/ontology/tjtm#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

aco:ascension-cosmos-oracles
    rdfs:label "Ascension Cosmos Oracles" ;
    a aco:HistoricalMetaphysicalArchiveLabel .

aco:ascension-cosmos-oracles-corp
    rdfs:label "Ascension Cosmos Oracles Corp" ;
    a aco:HistoricalCorporateRecord .

tjtm:ascension-master-of-the-ascension-age
    rdfs:label "Ascension Master of the Ascension Age" ;
    a tjtm:SymbolicTeachingTitle .

tjtm:enchanted-development
    rdfs:label "Enchanted Development" ;
    a tjtm:TeachingMaterial .

aco:ascension-center-organization
    rdfs:label "Ascension Center Organization" ;
    a aco:HistoricalOrganizationRecord .

aco:future-time-capsule
    rdfs:label "ACO Future Time Capsule" ;
    a aco:PreservationRecord .
```

## Archive Boundary

This identifier set separates historical organization records, current archive labels, symbolic teaching titles, teaching materials, and future preservation records.

Historical, corporate, symbolic, metaphysical, and review-pending material should remain clearly labeled by evidence lane.
