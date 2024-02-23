package idk.idk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public String addCustomer(@RequestParam String first, @RequestParam String last) {
        User customer = new User();
        customer.setFirstName(first);
        customer.setLastName(last);
        userRepository.save(customer);
        return "Added new customer to repo!";
    }

    @GetMapping("/list")
    public Iterable<User> getCustomers() {
        return userRepository.findAll();
    }

    @GetMapping("/find/{id}")
    public User findCustomerById(@PathVariable Integer id) {
        return userRepository.findCustomerById(id);
    }
}