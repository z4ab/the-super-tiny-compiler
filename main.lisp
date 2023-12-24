;; Constants
(define 'x 5) 
(define 'y 2)
(show (add x y))

;; Function definitions (scuffed)
(func 'f (list 'n) "(add (sub1 y) n)")
(func 'sub1 (list 'a) "(subtract a 1)")
(show (sub1 1))
(show (f 3))

;; Lists
(define 'lst (list 1 2 3 4 5))
(show lst)

;; Higher order functions
(show (map 'add1 lst))
(show (map 'sub1 lst))

;; Booleans
(define 'true 1) 
(define 'false 0) ; in js, true and false can be represented as 1 and 0

(define 'a true)
(define 'b false)

(show (not a))
(show (and a b))
(show (or a b))

(func 'xor (list 'p 'q) 
    "(and (or p q) (not (and p q)))")
(show (xor a b))

(show (equal 1 1)) ; check for equality

;; If statements
(show (if true 'add1 5))