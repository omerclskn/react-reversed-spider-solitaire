export const DataGenerator = () => {

    let arrayOfCards = [{
        value: "1",
        deck: 2,
        active: true,
        show: false
    }, {
        value: "2",
        deck: 2,
        active: true,
        show: false
    }, {
        value: "3",
        deck: 4,
        active: true,
        show: false
    }]

    let linked_data1 = {
        val: {
            value: "1",
            deck: 2,
            active: true,
            show: false
        },
        next: {
            val: {
                value: "2",
                deck: 2,
                active: true,
                show: false
            },
            next: {
                val: {
                    value: "3",
                    deck: 4,
                    active: true,
                    show: false
                },
                next: null
            }
        }
    }

    let linked_data2 = {
        val: {
            value: "5",
            deck: 2,
            active: true,
            show: false
        },
        next: {
            val: {
                value: "6",
                deck: 6,
                active: true,
                show: false
            },
            next: {
                val: {
                    value: "7",
                    deck: 3,
                    active: true,
                    show: false
                },
                next: null
            }
        }
    }

    let linked_data3 = {
        val: {
            value: "5",
            deck: 1,
            active: false,
            show: true
        },
        next: {
            val: {
                value: "10",
                deck: 5,
                active: false,
                show: true
            },
            next: {
                val: {
                    value: "11",
                    deck: 7,
                    active: false,
                    show: true
                },
                next: null
            }
        }
    }

    let linked_data4 = {
        val: {
            value: "5",
            deck: 1,
            active: false,
            show: true
        },
        next: {
            val: {
                value: "10",
                deck: 5,
                active: false,
                show: true
            },
            next: {
                val: {
                    value: "12",
                    deck: 7,
                    active: false,
                    show: true
                },
                next: null
            }
        }
    }

    let remCards = [{
            value: "1",
            deck: 1,
            active: true,
            show: false
        },
        {
            value: "2",
            deck: 1,
            active: true,
            show: false
        },
        {
            value: "3",
            deck: 1,
            active: true,
            show: false
        }
    ]

    let complete_deck = {
        val: {
            value: "1",
            deck: 1,
            active: true,
            show: true
        },
        next: {
            val: {
                value: "2",
                deck: 5,
                active: true,
                show: true
            },
            next: {
                val: {
                    value: "3",
                    deck: 7,
                    active: true,
                    show: true
                },
                next: {
                    val: {
                        value: "4",
                        deck: 7,
                        active: true,
                        show: true
                    },
                    next: {
                        val: {
                            value: "5",
                            deck: 7,
                            active: true,
                            show: true
                        },
                        next: {
                            val: {
                                value: "6",
                                deck: 7,
                                active: true,
                                show: true
                            },
                            next: {
                                val: {
                                    value: "7",
                                    deck: 7,
                                    active: true,
                                    show: true
                                },
                                next: {
                                    val: {
                                        value: "8",
                                        deck: 7,
                                        active: true,
                                        show: true
                                    },
                                    next: {
                                        val: {
                                            value: "9",
                                            deck: 7,
                                            active: true,
                                            show: true
                                        },
                                        next: {
                                            val: {
                                                value: "10",
                                                deck: 7,
                                                active: true,
                                                show: true
                                            },
                                            next: {
                                                val: {
                                                    value: "11",
                                                    deck: 7,
                                                    active: true,
                                                    show: true
                                                },
                                                next: {
                                                    val: {
                                                        value: "12",
                                                        deck: 7,
                                                        active: true,
                                                        show: true
                                                    },
                                                    next: {
                                                        val: {
                                                            value: "13",
                                                            deck: 7,
                                                            active: true,
                                                            show: true
                                                        },
                                                        next: null
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return {
        linked_data1,
        linked_data2,
        linked_data3,
        linked_data4,
        remCards,
        complete_deck,
        arrayOfCards
    }
}