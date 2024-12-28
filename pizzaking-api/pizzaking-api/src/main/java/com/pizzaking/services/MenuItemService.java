package com.pizzaking.services;

import com.pizzaking.data.MenuItem;

import java.util.List;

public interface MenuItemService {
    MenuItem addMenuItem(MenuItem menuItem);

    void deleteMenuItem(Long productId);

    MenuItem updateMenuItem(Long productId, MenuItem menuItem);

    List<MenuItem> getAllMenuItems();

    MenuItem getMenuItemById(Long productId);

    List<MenuItem> getMenuItemsByCategory(String category);
}