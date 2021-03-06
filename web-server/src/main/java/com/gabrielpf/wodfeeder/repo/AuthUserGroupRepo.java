package com.gabrielpf.wodfeeder.repo;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.gabrielpf.wodfeeder.model.auth.AuthUserGroup;

@Repository
@RestResource(exported = false)
public interface AuthUserGroupRepo extends JpaRepository<AuthUserGroup, UUID> {
    Optional<List<AuthUserGroup>> findByUserId(UUID userId);
}
