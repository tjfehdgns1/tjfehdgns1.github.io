---
title: C
tags:
  - C
  - 프로그래밍
date: 2023-11-19
---
---

```c
#include <stdio.h>

int main() {
	println("Hello World")
	return 0;
}
```


---



## Pointer

```c
short birthday; // short(2byte)크기의 변수 선언
short* ptr; // 2byte크기의 대상을 가르키는 포인터 선언

ptr = &birthday // birthday의 주소를 포인터에 대입

*ptr = "010224" // 포인터가 가르키는 대상에 대입, 여기서 *은 번지 지정 연산자이다
```



```c
#include <stdio.h>

void Test(short *ptr) {
	short soft = 0;
	soft = *ptr;
	*ptr = 3;
}

void main() {
	short tips = 5;
	Test(&tips);
}
```


**void pointer**

```c
int data = 0;
void *p = &data;
*(int *)p = 5;
```


**배열과 포인터**

```c
int data[2] = {0x12345678, 0x12345678};

*(data + 1) = 0x22; // 0x12345678 -> 0x22
data[1] = 0x22; // 0x12345678 -> 0x22

// 0x12345678 -> 0x12345622
*(char*)(data + 1) = 0x22; // 포인터 형변환으로 data[1]의 일부분을 바꿀수 있다

char data[5] = {1, 2, 3, 4, 5};
int i, sum = 0, select = 2;
char *p = data + select; // char *p = &data[select];

// char (*p)[5] 와 char *p[5]
// char (*p)[5]: char 5개 즉 5바이트 크기의 메모리를 가르킴
// char *p[5]: *p1 *p2 *p3 *p4 *p5
```



## Memory


> 정적 할당: 컴파일중 변수에 크기에 맞게 메로리를 할당하는 것, 종료까지 유지
  동적 할당: 런타임중 사용할 메모리 공간을 할당하는 것, 힙에 생성됨


1. `malloc(size_t size);`

```c
int *p = (int *)malloc(12); // 12byte에 4byte씩
int *p = (int *)malloc(sizeof(int) * 3); // 12byte에 4byte씩
int data[3]; // 12byte에 4byte씩 할당하지만 스택에 할당됨


int data_size = 3;
int data[data_size]; // ERROR
int *p = (int *)malloc(sizeof(int) * data_size);
```

2. `calloc(size_t num, size_t size);`

```c
p = (int *)calloc(3, sizeof(int)); // 0으로 초기와
```

3. `realloc(void *ptr, size_t new_size);`

```c
p = (int *)realloc(p, sizeof(short) * 6);
```

4. `free(ptr);`

```c
free(p);
```


**이중 포인터**

```c
#include <stdio.h>
#include <malloc.h>

void getMyData(int **q) {
	*q = (int *)malloc(sizeof(int) * 2);
}

void main() {
	int *p;
	getMyData(&p);
	*p = 5;
	free(p);
}
```

```c
#include <stdio.h>
#include <malloc.h>

void main() {
	unsigned char limit_table[3];
	unsigned char *p[3];
	int temp;

	for(int i = 0; i < 3; i++) {
		scanf("%d", &temp);
		limit_table[i] = (unsigned char)temp;

		p[i] = (unsigned char *)malloc(limit_table[i]);
		for(int j = 0; j < limit_table[i]; j++) {
			scanf("%d", &temp);
			*(p[i] + j) = (unsigned char)temp;
		}
	}

	for(int i = 0; i < 3; i++) {
		free(p[i]);
	}
}
```



```c

void main2() {
	unsigned char *p_limit_table;
	unsigned char **p;
	int age, age_step, temp;


	scanf("%d", &age_step);

	p_limit_table = (unsigned char *)malloc(age_step);
	p = (unsigned char *)malloc(sizeof(unsigned char *) * age_step);

	for(age = 0; age < age_step; age++) {
		scanf("%d", &temp);
		*(p_limit_table + age) = (unsigned char)temp;
		*(p + age) = (unsigned char * )malloc(*(p_limit_table + age));
		
		for(int j = 0; j < *(p_limit_table + age); j++) {
			scanf("%d", &temp);
			*(*(p + age) + j) = (unsigned char)tmep;
		}
	}



	for(age = 0; age < age_step; age++) {
		free(*(p + age));
	}
	free(p_limit_table);
	free(p);
}
```


**함수 포인터**


```c
#include <stdio.h>


int add(int a, int b) {
	return a + b;
}

int sub(int a, int b) {
	return a - b;
}

int div(int a, int b) {
	if (b != 0) {
		return a / b;
	} else {
		printf("Error: ZERODIVISION\n");
		return 0;
	}
}

int mul(int a, int b) {
	return a * b;
}


int main() {
	typedef int (*Operator)(int, int);
	int a = 2;
	int b = 3;

	Operator operate;
	operate = add;
	printf("Add: %d\n", operate(a, b));
	
	operate = sub;
	printf("Sub: %d\n", operate(a, b));

	operate = div;
	printf("Div: %d\n", operate(a, b));

	operate = add;
	printf("Mul: %d\n", operate(a, b));

	return 0;
}


```


## Struct


```c
typedef struct Node {
	int data;
	struct Node* next;
} Node;


Node node1;
Node *p;
p = &node1;
(*p).data = 5; // *은 . 보다 우선 순위가 낮아 불편함, 이를 해결하기 위해 ->
p -> data = 2;
```









```c
#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>


struct Node {
	int data;
	struct Node* next;
};


struct LinkedList {
	struct Node* head;
};


struct Node* createNode(int data) {
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode -> data = data;
	newNode -> next = NULL;
	return newNode;
};


void initLinkedList(struct LinkedList* list) {
	list -> head = NULL;
}


void appendNode(struct LinkedList* list, int data) {
	struct Node* newNode = createNode(data);

	if (list -> head == NULL) {
		list -> head = newNode;
	} else {
		struct Node* temp = list -> head;
		while (temp -> next != NULL) {
			temp = temp -> next;
		}
		temp -> next = newNode;
	}
}


void printLinkedList(struct LinkedList* list) {
	struct Node* temp = list -> head;

	while (temp != NULL) {
		printf("%d -> ", temp -> data);
		temp = temp -> next;
	}
	printf("NULL\n");
}


void freeLinkedList(struct LinkedList* list) {
	struct Node* current = list -> head;
	struct Node* next;

	while (current != NULL) {
		next = current -> next;
		free(current);
		current = next;
	}

	list -> head = NULL;
}


int main() {
	struct LinkedList myList;
	initLinkedList(&myList);

	appendNode(&myList, 1);
	appendNode(&myList, 2);
	appendNode(&myList, 3);
	appendNode(&myList, 4);


	printf("Linked List: ");
	printLinkedList(&myList);

	freeLinkedList(&myList);

	return 0;
}
```













