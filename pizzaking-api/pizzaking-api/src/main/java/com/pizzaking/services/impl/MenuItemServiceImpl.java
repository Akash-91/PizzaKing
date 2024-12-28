package com.pizzaking.services.impl;


import com.pizzaking.data.MenuItem;
import com.pizzaking.repository.MenuItemRepository;
import com.pizzaking.services.MenuItemService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Override
    public MenuItem addMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    @Override
    public void deleteMenuItem(Long productId) {
        if (menuItemRepository.existsById(productId)) {
            menuItemRepository.deleteById(productId);
        } else {
            throw new IllegalArgumentException("MenuItem with ID " + productId + " not found");
        }
    }

    public List<MenuItem> getMenuItemsByCategory(String category) {
        return menuItemRepository.findByCategory(category);
    }

    public MenuItem updateMenuItem(Long id, MenuItem updatedItem) {
        return menuItemRepository.findById(id)
                .map(existingItem -> {
                    existingItem.setName(updatedItem.getName());
                    existingItem.setDescription(updatedItem.getDescription());
                    existingItem.setPrice(updatedItem.getPrice());
                    existingItem.setCategory(updatedItem.getCategory());
                    return menuItemRepository.save(existingItem);
                })
                .orElseThrow(() -> new RuntimeException("Menu item not found"));
    }

    @Override
    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    @Override
    public MenuItem getMenuItemById(Long productId) {
        return menuItemRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("MenuItem with ID " + productId + " not found"));
    }
}