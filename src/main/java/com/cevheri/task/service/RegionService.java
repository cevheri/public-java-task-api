package com.cevheri.task.service;

import com.cevheri.task.domain.Region;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.cevheri.task.domain.Region}.
 */
public interface RegionService {
    /**
     * Save a region.
     *
     * @param region the entity to save.
     * @return the persisted entity.
     */
    Region save(Region region);

    /**
     * Updates a region.
     *
     * @param region the entity to update.
     * @return the persisted entity.
     */
    Region update(Region region);

    /**
     * Partially updates a region.
     *
     * @param region the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Region> partialUpdate(Region region);

    /**
     * Get all the regions.
     *
     * @return the list of entities.
     */
    List<Region> findAll();

    /**
     * Get all the Region where Country is {@code null}.
     *
     * @return the {@link List} of entities.
     */
    List<Region> findAllWhereCountryIsNull();

    /**
     * Get the "id" region.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Region> findOne(Long id);

    /**
     * Delete the "id" region.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
