package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(DemoApplication.class, args);
		ContactRepository repository = context.getBean(ContactRepository.class);

		repository.save(new Contact("swara", "india", 2533986));
		repository.save(new Contact("eshaan", "india", 456890));
		repository.save(new Contact("john", "dubai", 253756));
		repository.save(new Contact("rick", "brazil", 258974));
		repository.save(new Contact("harry", "india", 879886));
		repository.save(new Contact("garry", "texas", 875586));
		repository.save(new Contact("ronny", "dubai", 2533986));
		repository.save(new Contact("apporv", "india", 2533986));
		repository.save(new Contact("nishant", "algeria", 2533986));
		repository.save(new Contact("gautham", "barbuda", 2533986));
	}
}