;; Add constants
(define 'x 5) 
(define 'y 2)
(add x y)

(func 'sub1 (list 'a) "(subtract a 1)")

;; Lists
(define 'lst (list 1 2 3 4 5))
(show lst)

;; Higher order functions
(map 'add1 lst)
(show (map 'sub1 lst))